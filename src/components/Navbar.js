import React, { useState } from 'react';
// import Section from '../Section';

const Navbar = ({ grouping, setGrouping, ordering, setOrdering }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isGroupingOpen, setIsGroupingOpen] = useState(false);
    const [isOrderingOpen, setIsOrderingOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleGrouping = () => setIsGroupingOpen(!isGroupingOpen);
    const toggleOrdering = () => setIsOrderingOpen(!isOrderingOpen);

    return (
        <>
        <nav style={styles.navbar}>
            <div style={styles.dropdown}>
                <div onClick={toggleDropdown} style={styles.dropdownButton}>
                    <div style={styles.dropdownButtonDivOne}>
                        <span className="material-symbols-outlined" style={{ paddingTop: '10px' }}>
                            tune
                        </span>
                    </div>
                    <div style={styles.dropdownButtonDivTwo}>
                        Display <i className="arrow down" style={styles.arrowDown}></i>
                    </div>
                </div>
                {isOpen && (
                    <div style={styles.dropdownContent}>
                        <div style={styles.dropdownItem} onClick={toggleGrouping}>
                            Grouping <i className="arrow down" style={styles.arrowDown}></i>
                        </div>
                        {isGroupingOpen && (
                            <div style={styles.subDropdownContent}>
                                <div style={styles.subDropdownItem} onClick={() => setGrouping("Status")}>
                                    Status
                                </div>
                                <div style={styles.subDropdownItem} onClick={() => setGrouping("User")}>
                                    User
                                </div>
                                <div style={styles.subDropdownItem} onClick={() => setGrouping("Priority")}>
                                    Priority
                                </div>
                            </div>
                        )}

                        <div style={styles.dropdownItem} onClick={toggleOrdering}>
                            Ordering <i className="arrow down" style={styles.arrowDown}></i>
                        </div>
                        {isOrderingOpen && (
                            <div style={styles.subDropdownContent}>
                                <div style={styles.subDropdownItem} onClick={() => setOrdering("Priority")}>
                                    Priority
                                </div>
                                <div style={styles.subDropdownItem} onClick={() => setOrdering("Title")}>
                                    Title
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div style={{ marginLeft: '20px' }}>
                <strong>Selected Grouping:</strong> {grouping} <br />
                <strong>Selected Ordering:</strong> {ordering}
            </div>
        </nav>
        </>
    );
};

const styles = {
    navbar: {
        height: '60px',
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px',
    },
    dropdown: {
        position: 'relative',
    },
    dropdownButton: {
        backgroundColor: '#fff',
        color: '#333',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
        borderRadius: '5px',
        transition: 'box-shadow 0.3s ease',
        display:'flex',
        flexDirection:'row'
    },
    dropdownButtonDivOne: {
        marginLeft: '5px'
    },
    dropdownButtonDivTwo: {
        marginTop: '6px',
        marginRight: '5px'
    },
    dropdownContent: {
        position: 'absolute',
        top: '60px',
        left: '0',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
        zIndex: 1,
        width: '200px',
    },
    dropdownItem: {
        color: '#333',
        padding: '12px 16px',
        cursor: 'pointer',
    },
    subDropdownContent: {
        paddingLeft: '20px',
        backgroundColor: '#f1f1f1',
    },
    subDropdownItem: {
        color: '#333',
        padding: '8px 16px',
        cursor: 'pointer',
    },
    arrowDown: {
        border: 'solid black',
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: '3px',
        transform: 'rotate(45deg)',
        WebkitTransform: 'rotate(45deg)',
        marginLeft: '8px',
    },
};

export default Navbar;
