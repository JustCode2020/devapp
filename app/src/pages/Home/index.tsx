import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import { green, blue, grey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    page: {
        color: '#33A8F8',
        textAlign: "center",
        paddingTop: 50
    },
    button: {
        
    }
});

//const [color, setColor] = useState({ color: blue[500] });
//const [changedColor, setChangeColor] = useState(false);

//const handleChange = () => {
  //  setColor({ : grey[800] });
//}

const Home = () => {
    const theme = useStyles();
    return (
        <div id="page-home">
            <div className="content">
                <header>
                </header>
                <main>
                    <div className={theme.page} >
                        <div className="field">
                            <h1>Pontos cadastrados</h1>
                        </div>
                        <div className="field">
                            <AddCircleIcon style={{color:green[700]}}/>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Home;