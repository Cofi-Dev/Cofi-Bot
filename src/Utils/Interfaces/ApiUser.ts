export interface APIUser {
  id: string;
  username: string;
  disciminator: string;
  avatar: string;
  guilds: any;
  admin: boolean;
}

export interface APIGuildMin {
  id: string;
  name: string;
  icon: string;
  admin: boolean;
  invited: boolean;
}
