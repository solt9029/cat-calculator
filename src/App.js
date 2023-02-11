import { Grid, Button } from '@mui/material'
import "./App.css"
import { useState } from "react";
import useSound from 'use-sound';
import plusSound from './plus.mp3';
import minusSound from './minus.mp3';

function App() {
  const [count, setCount] = useState(0);
  const [playPlusSound] = useSound(plusSound);
  const [playMinusSound] = useSound(minusSound);

  return (
    <Grid container>
      <Grid container style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
        <Grid item xs={12} sm={5} my={4} style={{display: "grid", placeItems: "center"}}>
          <div style={{textAlign: "center"}}>
            <Button variant="contained" style={{fontSize: "2rem"}} onClick={() => {
              if (count < 7) { setCount(count + 1); playPlusSound(); }
            }}>＋</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={2} my={4} style={{display: "grid", placeItems: "center"}}>
          <div style={{textAlign: "center"}}>
            <h1 style={{fontSize: "5rem"}}>{count}</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} my={4} style={{display: "grid", placeItems: "center"}}>
          <div style={{textAlign: "center"}}>
            <Button variant="contained" style={{fontSize: "2rem"}} onClick={() => {
              if (count > 0) { setCount(count - 1); playMinusSound(); }
            }}>ー</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
