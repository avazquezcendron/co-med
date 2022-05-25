import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const CustomMaterialMenu = ({ row, size, menuItems }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleActionClick = (mi) => {
		if (mi.actionClick) {
			mi.actionClick(row);
		}
	};

	return (
		<span>
			<IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick} size={size} title="Más opciones">
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="menu"
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
            >
                {menuItems.map((mi, index) =>
                    <div key={index}>
                        <MenuItem onClick={() => handleActionClick(mi)} >
                            <span><i className={mi.actionIcon}></i> {mi.actionName}</span>
                        </MenuItem> 

                        {/* <Divider />
                        <MenuItem onClick={deleteRow}>
                             <ListItemIcon>
                                <DeleteIcon fontSize="small" color="secondary" />                                                                
                            </ListItemIcon>
                            <Typography variant="inherit">{mi.actionName}</Typography>
                        </MenuItem>  */}
                    </div>
                )}
			</Menu>
		</span>
	);
};

export default CustomMaterialMenu;