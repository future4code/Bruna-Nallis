import { withTheme } from "styled-components";

export default function HomePage() {
  return (
    <div style={style.container}>
      <h1 style={style.title}>LabeX</h1>
      <div style={style.buttonContainer}>
        <button style={style.button}>Ver viagens</button>
        <button style={style.button}>Área de admin</button>
      </div>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
  },
  title: {
    color: "slategray",
  },
  button: {
    backgroundColor: "slategray",
    padding: 10,
    borderRadius: 20,
    borderWidth: 0,
    color: "white",
    fontSize: 20,
  },
};
