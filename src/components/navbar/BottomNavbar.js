import React, { useState, useEffect } from 'react';
import { colors } from '../../style/color';
import * as Icon from 'react-feather';
import { fontWeights } from '../../style/font/fontWeights';

const styles = {
  footer: {
    backgroundColor: colors.darkPurple,
    position: 'fixed',
    bottom: 10,
    left: '2%',
    width: '96%',
    borderRadius: '90px'
  },
  navbar: {
    paddingTop: '7px',
    paddingBottom: '7px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: colors.lightPurple,
    fontSize: '10px',
    fontWeight: fontWeights.bold,
  },
  navItem: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '7px',
    paddingBottom: '7px',
    paddingRight: '21px',
    paddingLeft: '21px',
    transition: 'color 0.1s ease-in-out',
  },
  icon: {
    paddingRight: '7px',
  },
  selected: {
    color: colors.darkPurple,
    backgroundColor: colors.white,
    borderRadius: '90px',
  }
};

const BottomNavbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem('Workspace');
  }, []);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const renderNavItem = (itemName, icon) => (
    <div
      className="nav-item"
      style={{
        ...styles.navItem,
        ...(selectedItem === itemName && styles.selected),
      }}
      onClick={() => handleItemClick(itemName)}
    >
      {icon}
      {selectedItem === itemName && (
        <span>
          {itemName}
        </span>
      )}
    </div>
  );

  return (
    <footer style={styles.footer}>
      <nav style={styles.navbar}>
        {renderNavItem('Workspace', <Icon.Grid size="25" style={styles.icon} />)}
        {renderNavItem('Rechercher', <Icon.Search size="25" style={styles.icon} />)}
        {renderNavItem('Créer', <Icon.PlusCircle size="25" style={styles.icon} />)}
        {renderNavItem('Forum', <Icon.MessageSquare size="25" style={styles.icon} />)}
        {renderNavItem('Profil', <Icon.User size="25" style={styles.icon} />)}
      </nav>
    </footer>
  );
};

export default BottomNavbar;
