import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SongsTabs = ({handleFilter}) => {
  return <BasicTabs handleFilter={handleFilter} />;
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs({handleFilter}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    handleFilter(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor=""
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blues" {...a11yProps(4)} />
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        All
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Rock
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Pop
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Jazz
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Blues
      </CustomTabPanel> */}
    </Box>
  );
}

export default SongsTabs;
