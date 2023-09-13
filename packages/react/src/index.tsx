import { colors } from "@raio-laser/tokens";
import { styled } from "./styles";

const Button = styled('button', {
  color: '$primaryDark'
})

export function App(){
  return <h1 style={{color: colors.primaryDark}}>hellow world</h1>
}