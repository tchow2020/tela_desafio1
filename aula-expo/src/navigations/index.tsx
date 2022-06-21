import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {LoginProps} from "../screens/Login"
import {CadastroProps} from "../screens/Cadastro"
import {HomeProps} from "../screens/Home"
const { Screen, Navigator} = createBottomTabNavigator();

export function BottomRoutes(){
    return(
        <Navigator>
            <Screen
                name="login"
                component={LoginProps}
            />

            <Screen
                name="cadastro"
                component={CadastroProps}
            />

            <Screen
                name="home"
                component={HomeProps}
            />
        </Navigator>
    )
}