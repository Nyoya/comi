create table if not exists "public"."t_roasts" (
  id bigint primary key generated always as identity,
  user_id bigint,
  bean_id bigint,
  total_time text,
  profile json,
  note text,
  level text,
  created_at timestamp default now(),
  updated_at timestamp default now(),

  constraint m_users foreign key (user_id) references m_users(id) on delete cascade,
  constraint t_beans foreign key (bean_id) references t_beans(id) on delete cascade
);