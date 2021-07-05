import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ColorPicker from './ColorPicker';
import { v4 as uuid } from 'uuid';
import DraggableColorBox from './DraggableColorBox';
import { Button, TextField } from '@material-ui/core';

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyItems: 'space-between',
    minHeight: '100vh',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&>div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: '64px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [colors, setColors] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addSquare = (colorSquareObject) => {
    for (let palette of props.palettes) {
      for (let color of palette.colors) {
        if (color.name.toUpperCase() === colorSquareObject.colorName.toUpperCase()) {
          return alert('That color already exists in some palette.');
        }
      }
    }

    if (colors.length < 20) {
      setColors([...colors, colorSquareObject]);
    } else {
      alert('You can only add 20 colors to a palette!');
    }
  };

  const deleteSquare = (squareName) => {
    setColors(colors.filter((e) => e.colorName !== squareName));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ color: 'black' }}>
            New Palette
          </Typography>
          <div style={{ heigth: '24px', display: 'flex', alignItems: 'center' }}>
            <TextField id="outlined-basic" label="Palette Name" variant="outlined" />
            <Button variant="contained" color="primary" style={{ margin: '15px' }}>
              Create Palette
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>

        <Divider />
        {/* Drawer content */}
        <div className={classes.drawerContent}>
          <ColorPicker handleSubmit={addSquare} />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* Main content */}
        {colors.length > 1 ? (
          colors.map((e) => {
            return <DraggableColorBox color={e.stateColor} name={e.colorName} key={uuid()} handleDelete={deleteSquare} />;
          })
        ) : colors.length > 0 ? (
          <DraggableColorBox color={colors[0].stateColor} name={colors[0].colorName} key={uuid()} handleDelete={deleteSquare} />
        ) : null}
      </main>
    </div>
  );
}
