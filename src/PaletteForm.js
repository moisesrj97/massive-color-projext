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
import DraggableColorList from './DraggableColorList';
import DraggableColorBox from './DraggableColorBox';
import { Button, TextField } from '@material-ui/core';
import Picker from 'emoji-picker-react';
import Popper from '@material-ui/core/Popper';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    zIndex: 25,
  },
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
    padding: 0,
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
  const [paletteName, setPaletteName] = React.useState('');
  const [isFull, setIsFull] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [emoji, setEmoji] = React.useState('😀');

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

    for (let color of colors) {
      if (color.colorName.toUpperCase() === colorSquareObject.colorName.toUpperCase()) {
        return alert('That color already exists in some palette.');
      }
    }

    if (colors.length === 19) {
      setIsFull(true);
    }

    setColors([...colors, colorSquareObject]);
  };

  const deleteSquare = (squareName) => {
    setIsFull(false);
    setColors(colors.filter((e) => e.colorName !== squareName));
  };

  const clearPalette = () => {
    setColors([]);
  };

  const handleInput = (e) => {
    setPaletteName(e.target.value);
  };

  const handleButton = (e) => {
    if (paletteName === '') {
      return alert('Choose a name for your palette');
    }
    let newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(' ', '-'),
      emoji: emoji,
      colors: [],
    };

    for (let color of colors) {
      newPalette.colors = [...newPalette.colors, { name: color.colorName, color: color.stateColor.hex }];
    }

    props.addPalette(newPalette);
    props.routeProps.history.push('/');
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onEmojiClick = (event, emojiObject) => {
    setEmoji(emojiObject.emoji);
  };

  const popperOpen = Boolean(anchorEl);
  const id = popperOpen ? 'simple-popper' : undefined;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
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
            <TextField id="outlined-basic" label="Palette Name" variant="outlined" onChange={handleInput} />
            <div>
              <Button
                onClick={handleClick}
                aria-describedby={id}
                variant="contained"
                color="primary"
                style={{ margin: '15px', backgroundColor: 'white' }}
              >
                {emoji}
              </Button>
              <Popper id={id} open={popperOpen} anchorEl={anchorEl}>
                <div className={classes.paper} style={{ marginTop: '25px' }}>
                  <Picker onEmojiClick={onEmojiClick} />
                </div>
              </Popper>
            </div>
            <Button variant="contained" color="primary" style={{ margin: '15px' }} onClick={handleButton}>
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
          <ColorPicker handleSubmit={addSquare} fullPalette={isFull} clearPalette={clearPalette} />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* Main content */}

        <DraggableColorList axis={'xy'} colors={colors} handleDelete={deleteSquare} onSortEnd={onSortEnd} pressDelay={100} />
      </main>
    </div>
  );
}
