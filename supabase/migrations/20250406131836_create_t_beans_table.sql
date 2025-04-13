create table if not exists "public"."t_beans" (
  id bigint primary key generated always as identity,
  user_id bigint,
  name text not null,
  origin text not null,
  variety text,
  process text not null,
  created_at timestamp default now(),
  updated_at timestamp default now(),

  constraint m_users foreign key (user_id) references m_users(id) on delete cascade
);