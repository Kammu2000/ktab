export interface KittyTab extends Tab {};

export interface KittyWindow {
  id: number;
  is_active: boolean;
  is_focused: boolean;
  tabs: KittyTab[];
};

export interface Tab {
  id: number; 
  title: string;
}

