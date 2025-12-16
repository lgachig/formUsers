export default function FormUser({ register, handleSubmit, onSubmit, row }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Agregar Usuario</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <img style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '10px',
          }} src={row.img} alt="" />
          
          <input 
            {...register("id")} 
            placeholder="id"
            value={row ? row.id : ''}
            style={styles.input}
          />
          <input
            {...register("product")} 
            placeholder="product"
            defaultValue={row ? row.product : ''}
            style={styles.input}
          /> 
          <input
            {...register("cost")} 
            placeholder="cost"
            defaultValue={row ? row.cost : ''}
            style={styles.input}
          />
          <input
            {...register("category")} 
            placeholder="category"
            defaultValue={row ? row.category : ''}
            style={styles.input}
          />
          <input
            {...register("stock")} 
            placeholder="stock"
            defaultValue={row ? row.stock : ''}
            style={styles.input}
          />
          <input
            {...register("img")} 
            placeholder="img"
            value={row ? row.img : ''}
            style={styles.input}  
          />
        

          <div style={styles.buttons}>
            <input 
              type="submit" 
              value="Agregar" 
              style={styles.saveBtn}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "7px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  saveBtn: {
    background: "#4CAF50",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  closeBtn: {
    background: "#f44336",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};