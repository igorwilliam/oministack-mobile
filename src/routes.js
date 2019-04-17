import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from './views/Main'
import Box from './views/Box'

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        Box
    })
)

export default Routes