import React from 'react';

import { Header, Button, Divider, Grid, Segment } from 'semantic-ui-react';
import { Flex, Box } from 'rebass';

import { APPLICATION_NAME } from '../constants/Strings';
const argon2 = require('argon2-browser');
// If you comment out the line below everything works, if not then you get the error.

class LandingPage extends React.PureComponent {
  render() {
    {
      argon2
        .hash({
          pass: 'p@ssw0rd',
          salt: 'somesalt',
        })
        .then(hash => console.log({ hash }));
    }
    return (
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Header style={{ padding: '6%', fontSize: '45pt' }}>
          Welcome to {APPLICATION_NAME}
        </Header>
        <Box width={0.5}>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column verticalAlign="middle">
                <Button
                  content="I'm a Company"
                  icon="building"
                  size="big"
                  href="/signup?type=company"
                />
              </Grid.Column>

              <Grid.Column verticalAlign="middle">
                <Button
                  content="I'm a User"
                  icon="user"
                  size="big"
                  href="/signup?type=user"
                />
              </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
          </Segment>
        </Box>
      </Flex>
    );
  }
}

export default LandingPage;
