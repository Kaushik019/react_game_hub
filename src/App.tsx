import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap="1"
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
        ABCD
      </GridItem>
    </Grid>
  );
}

export default App;
