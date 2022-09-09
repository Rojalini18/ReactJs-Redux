import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 style={{ fontSize: '40px', fontWeight: '900', marginRight: '34%' }}>
        <span style={{ color: '#7f59d4' }}>Recent</span> Jobs{' '}
      </h1>
      <div
        style={{
          margin: 'auto',
          paddingLeft: '0%',
          width: '800px',
          marginBottom: '20px',
        }}
      >
        <SimpleGrid columns={1} spacing={10}>
          <Box
            border="2px solid #7f59d4"
            borderRadius="10px"
            boxShadow="dark-lg"
            variant="outline"
            height="120px"
          >
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>TaleWind</div>
              <div>Lead Producer</div>
              <div>£50k - £65k</div>
            </div>
          </Box>
          <Box
            border="2px solid #7f59d4"
            borderRadius="10px"
            boxShadow="dark-lg"
            variant="outline"
            height="120px"
          >
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>TaLEWind</div>
              <div>Lead Game Developer</div>
              <div>£40k - £50k</div>
            </div>
          </Box>
          <Box
            border="2px solid #7f59d4"
            borderRadius="10px"
            boxShadow="dark-lg"
            variant="outline"
            height="120px"
          >
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>SlimWiki</div>
              <div>
                Full-Stack JavaScript Developer (Node.js / React.js /
                Express.js)
              </div>
              <div>Mid, Senior</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>The Wanderlust Group</div>
              <div>Director of Marketing</div>
              <div>$150k</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>JumpSearch</div>
              <div>Senior Software Engineer(.NET)</div>
              <div>Senior</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>JumpSearch</div>
              <div>Account Executive</div>
              <div>Mid</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>JumpSearch</div>
              <div>Software Engineer(.NET)</div>
              <div>Mid</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>Automio</div>
              <div>Full Stack Javascript Developer</div>
              <div>Mid, Senior</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>Automio</div>
              <div>UX/UI Designer</div>
              <div>Mid, Senior</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>Automio</div>
              <div>Head of Engineering</div>
              <div>Manager, Director</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>Automio</div>
              <div>Head of Marketing</div>
              <div>Manager, Director</div>
            </div>
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="120px">
            <div style={{ textAlign: 'left', marginLeft: '15px' }}>
              <div>Administrate</div>
              <div>Content Specialist</div>
              <div>Mid</div>
            </div>
          </Box>
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Home;
