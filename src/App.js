import { Grid, Button } from '@mui/material'
import "./App.css"
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid container>
      <Grid container style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
        <Grid item xs={12} sm={5} my={4} style={{display: "grid", placeItems: "center"}}>
          <div style={{textAlign: "center"}}>
            <Button variant="contained" style={{fontSize: "2rem"}} onClick={() => {
              if (count < 7) { setCount(count + 1); }
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
              if (count > 0) { setCount(count - 1); }
            }}>ー</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
