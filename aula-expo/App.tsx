import * as React from "react";
import { LoginProps } from './src/screens/Login'
import { CadastroProps } from "./src/screens/Cadastro";
import { HomeProps } from "./src/screens/Home";
export default function App() {
     return (<LoginProps navigate={function (arg0: string): unknown {
     throw new Error("Function not implemented.");
   } } open={undefined}/>);
  //  return (<CadastroProps/>);
  //  return(<HomeProps/>);
}