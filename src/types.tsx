import { TreeViewTypes } from "devextreme-react/tree-view";
import { ButtonTypes } from "devextreme-react/button";
import React from "react";

export interface HeaderProps {
    menuToggleEnabled: boolean;
    title?: string;
    toggleMenu: (e: ButtonTypes.ClickEvent) => void;
}

export interface SideNavigationMenuProps {
    selectedItemChanged: (e: TreeViewTypes.ItemClickEvent) => void;
    openMenu: (e: React.PointerEvent) => void;
    compactMode: boolean;
    onMenuReady: (e: TreeViewTypes.ContentReadyEvent) => void;
}

export interface UserPanelProps {
    menuMode: "context" | "list";
}

export interface User {
    email: string;
    avatarUrl: string;
}

export type AuthContextType = {
    user?: User;
    signIn: (
        email: string,
        password: string
    ) => Promise<{ isOk: boolean; data?: User; message?: string }>;
    signOut: () => void;
    loading: boolean;
};

export interface SideNavToolbarProps {
    title: string;
}

export interface SingleCardProps {
    title?: string;
    description?: string;
}

export type Handle = () => void;

interface NavigationData {
    currentPath: string;
}

export type NavigationContextType = {
    setNavigationData?: ({ currentPath }: NavigationData) => void;
    navigationData: NavigationData;
};

export type ValidationType = {
    value: string;
};

export type IATACode =  "ATL" | "PEK" | "LAX" | "ORD" | "DFW" | "DEN" | "JFK" | "SFO" | "SEA" | "LAS" | "MCO" | "EWR" | "CLT" | "PHX" | "IAH" | "MIA" | "BKK" | "CDG" | "AMS" | "FRA";

export type Flight = {
    id: number;
    airlineCode: IATACode;
    flightNumber: string;
    flightDate: string;
    origin: IATACode;
    destination: IATACode;
};
export type Contingent = {
    
    flightId: number;
    clientCode: string;
    totalSeats: number;
    bookedSeats: number;
};
