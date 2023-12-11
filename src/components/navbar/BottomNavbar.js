import React, { useState, useEffect } from 'react';
import { colors } from '../../style/color';
import * as Icon from 'react-feather';

const styles = {
  footer: {
    backgroundColor: colors.darkPurple,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  navbar: {
    padding: '7px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: colors.lightPurple,
    fontSize: '10px',
  },
  navItem: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    paddingBottom: '5px',
  },
  selected: {
    color: colors.white,
  },
  separator: {
    height: '2px',
    width: '40px',
    background: colors.white,
    marginTop: '2px',
  },
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
      style={{ ...styles.navItem, ...(selectedItem === itemName && styles.selected) }}
      onClick={() => handleItemClick(itemName)}
    >
      {icon}
      {selectedItem !== itemName && (
        <span>
          {itemName}
        </span>
      )}
      {selectedItem === itemName && (
        <div style={styles.separator}></div>
      )}
    </div>
  );

  return (
    <footer style={styles.footer}>
      <nav style={styles.navbar}>
        {renderNavItem('Workspace', <Icon.Menu size="40" style={styles.icon} />)}
        {renderNavItem('Rechercher', <Icon.Search size="40" style={styles.icon} />)}
        {renderNavItem('Créer', <Icon.PlusCircle size="40" style={styles.icon} />)}
        {renderNavItem('Forum', <Icon.MessageSquare size="40" style={styles.icon} />)}
        {renderNavItem('Profil', <Icon.User size="40" style={styles.icon} />)}
      </nav>
    </footer>
  );
};

export default BottomNavbar;
