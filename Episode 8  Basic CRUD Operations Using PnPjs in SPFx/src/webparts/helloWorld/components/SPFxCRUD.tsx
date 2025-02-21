import * as React from "react";
import { useEffect, useState } from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { getSP } from "../pnpConfigFile";

interface ListItem {
  Id: number;
  Title: string;
}

interface SPFxCRUDProps {
  listName: string;
}

const SPFxCRUD: React.FC<SPFxCRUDProps> = ({ listName }) => {
  const [items, setItems] = useState<ListItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [idToUpdate, setIdToUpdate] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sp = getSP();

  const fetchItems = async (): Promise<void> => {
    try {
      setErrorMessage(null);
      const listItems: ListItem[] = await sp.web.lists
        .getByTitle(listName)
        .items();
      setItems(listItems);
    } catch (error) {
      setErrorMessage(
        "Failed to fetch items. Please check the list name or your permissions."
      );
      console.error("Fetch Items Error: ", error);
    }
  };

  useEffect(() => {
    fetchItems().catch((error) => {
      setErrorMessage("Failed to fetch items. Please try again later.");
      console.error("Fetch Items Error: ", error);
    });
  }, []);

  const createItem = async (): Promise<void> => {
    if (!title) {
      alert("Title is required!");
      return;
    }
    try {
      setErrorMessage(null);
      await sp.web.lists.getByTitle(listName).items.add({
        Title: title,
      });
      alert("Item created successfully!");
      setTitle("");
      await fetchItems();
    } catch (error) {
      setErrorMessage("Failed to create item. Please try again.");
      console.error("Create Item Error: ", error);
    }
  };

  const updateItem = async (): Promise<void> => {
    if (!idToUpdate || !title) {
      alert("ID and Title are required for update!");
      return;
    }
    try {
      setErrorMessage(null);
      await sp.web.lists
        .getByTitle(listName)
        .items.getById(parseInt(idToUpdate, 10))
        .update({
          Title: title,
        });
      alert("Item updated successfully!");
      setIdToUpdate("");
      setTitle("");
      await fetchItems();
    } catch (error) {
      setErrorMessage(
        "Failed to update item. Please check the ID or try again."
      );
      console.error("Update Item Error: ", error);
    }
  };

  const deleteItem = async (id: number): Promise<void> => {
    try {
      setErrorMessage(null);
      await sp.web.lists.getByTitle(listName).items.getById(id).delete();
      alert("Item deleted successfully!");
      await fetchItems();
    } catch (error) {
      setErrorMessage("Failed to delete item. Please try again.");
      console.error("Delete Item Error: ", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>SPFx CRUD Operations</h2>

      {errorMessage && (
        <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>
      )}

      {/* Input fields for Create/Update */}
      <div>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Enter ID (for update only)"
          value={idToUpdate}
          onChange={(e) => setIdToUpdate(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={createItem} style={{ marginRight: "10px" }}>
          Create
        </button>
        <button onClick={updateItem} style={{ marginRight: "10px" }}>
          Update
        </button>
      </div>

      {/* Items Table */}
      <table style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Title}</td>
              <td>
                <button onClick={() => deleteItem(item.Id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SPFxCRUD;