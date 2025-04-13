insert into public.m_users
  (username, password)
values
  ('ryoya', 'password!');

insert into public.t_beans
  (user_id, name, origin, variety, process)
values
  (1, 'Colombia Patio Bonito Wush Wush Washed', 'Colombia', 'Arabica', 'natural');

insert into public.t_roasts
  (user_id, bean_id, total_time, profile, note, level)
values
  (1, 1, '15:00', '{
  "data": [
    {
      "time": "00:00",
      "temperature": "0"
    },
    {
      "time": "05:00",
      "temperature": "30"
    },
    {
      "time": "10:00",
      "temperature": "70"
    },
    {
      "time": "15:00",
      "temperature": "90"
    }
  ]
}', 'ノートです。', 'light');