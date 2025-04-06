create table if not exists "public"."m_users" (
  id bigint primary key generated always as identity,
  username text not null UNIQUE,
  password text not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);