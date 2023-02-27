import { createContext } from "react";
import { ContextValues, CardProps } from "../components/Types";

export const InfoContext = createContext({} as ContextValues<CardProps>);
