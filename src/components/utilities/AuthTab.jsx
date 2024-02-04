import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    } from "@chakra-ui/react";

/**
 * Renders a component with two tabs for authentication.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.tab1 - The label for the first tab.
 * @param {string} props.tab2 - The label for the second tab.
 * @returns {JSX.Element} The rendered component.
 */
export const AuthTab = ({tab1, tab2}) =>{
    return (
      <Tabs align="center" variant="unstyled" defaultIndex={0} color="red">
        <TabList>
          <Tab _selected={{bg: "red.600", color : "white"}}>Login</Tab>
          <Tab _selected={{bg: "red.600", color : "white"}}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {tab1}
          </TabPanel>
          <TabPanel>
            {tab2}
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }

export default AuthTab;