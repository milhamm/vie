export const ALL_TEAMS = [
  {
    id: 'cl4j4nq1n0001okfybo1mevv1',
    competition_id: 'cl4j4hya1001188fypsa1oi8a',
    leader_id: 'cl4hbpipd0026e8fyv8wx2d5u',
    team_name: 'WhatIsUIX',
    max_member: 4,
    roles_offered: 'UX Designer,Programmer',
    color_code: '#7F055F',
    created_at: '2022-06-18T00:14:18.011Z',
    updated_at: '2022-06-18T00:14:18.011Z',
    competition: {
      id: 'cl4j4hya1001188fypsa1oi8a',
      name: 'Compfest 14',
      organizer: 'Universitas Indonesia',
      description: 'Lomba Compfest',
      guidebookk: null,
      category: 'Game Dev,UI/UX,Competitive Programming',
      created_at: '2022-06-18T00:09:48.744Z',
      updated_at: '2022-06-18T00:09:48.745Z',
    },
    TeamMember: [
      {
        id: 'cl4j4nq1n0003okfy77gm2cfm',
        team_id: 'cl4j4nq1n0001okfybo1mevv1',
        user_id: 'cl4hbpipd0026e8fyv8wx2d5u',
        status: 2,
        created_at: '2022-06-18T00:14:18.011Z',
        updated_at: '2022-06-18T00:14:18.011Z',
      },
      {
        id: 'cl4j5ef7o00011gfy67ajcntp',
        team_id: 'cl4j4nq1n0001okfybo1mevv1',
        user_id: 'cl2anv7oj0000fwfy52i3t7ts',
        status: 2,
        created_at: '2022-06-18T00:35:03.684Z',
        updated_at: '2022-06-18T00:35:03.684Z',
      },
    ],
  },
];

export const GEMASTIK_RESPONSE = {
  id: 'cl4j4nq1n0001okfybo1mevv1',
  competition_id: 'cl4j4hya1001188fypsa1oi8a',
  leader_id: 'cl4hbpipd0026e8fyv8wx2d5u',
  team_name: 'WhatIsUIX',
  max_member: 4,
  roles_offered: 'UX Designer,Programmer',
  color_code: '#7F055F',
  created_at: '2022-06-18T00:14:18.011Z',
  updated_at: '2022-06-18T00:14:18.011Z',
  competition: {
    id: 'cl4j4hya1001188fypsa1oi8a',
    name: 'Compfest 14',
    organizer: 'Universitas Indonesia',
    description: 'Lomba Compfest',
    guidebookk: null,
    category: 'Game Dev,UI/UX,Competitive Programming',
    created_at: '2022-06-18T00:09:48.744Z',
    updated_at: '2022-06-18T00:09:48.745Z',
  },
  leader: {
    name: 'Aang',
    academic_year: '2019',
    email: 'aang@gmail.com',
    image:
      'https://cdn.discordapp.com/attachments/753143980681592867/960995097770594364/unknown.png',
    id: 'cl4hbpipd0026e8fyv8wx2d5u',
    major: 'Informatics',
  },
  TeamMember: [
    {
      status: 2,
      user: {
        id: 'cl4hbpipd0026e8fyv8wx2d5u',
        name: 'Aang',
        image:
          'https://cdn.discordapp.com/attachments/753143980681592867/960995097770594364/unknown.png',
      },
    },
    {
      status: 1,
      user: {
        id: 'cl2anv7oj0000fwfy52i3t7ts',
        name: 'Muhammad aIlham Mubarak',
        image:
          'https://cdn.discordapp.com/attachments/753143980681592867/987550776689819659/139524210_195248452330187_6146448312036373360_n_2.jpg',
      },
    },
    {
      status: 2,
      user: {
        id: 'cl2anv7oj0000fwfy52i3t7ts1',
        name: 'Muhammad aIlham Mubarak',
        image:
          'https://cdn.discordapp.com/attachments/753143980681592867/987550776689819659/139524210_195248452330187_6146448312036373360_n_2.jpg',
      },
    },
  ],
};

export const GEMASTIK_EXPECTED_RESPONSE = {
  id: 'cl4j4nq1n0001okfybo1mevv1',
  competition_id: 'cl4j4hya1001188fypsa1oi8a',
  leader_id: 'cl4hbpipd0026e8fyv8wx2d5u',
  team_name: 'WhatIsUIX',
  max_member: 4,
  roles_offered: 'UX Designer,Programmer',
  color_code: '#7F055F',
  created_at: '2022-06-18T00:14:18.011Z',
  updated_at: '2022-06-18T00:14:18.011Z',
  competition: {
    id: 'cl4j4hya1001188fypsa1oi8a',
    name: 'Compfest 14',
    organizer: 'Universitas Indonesia',
    description: 'Lomba Compfest',
    guidebookk: null,
    category: 'Game Dev,UI/UX,Competitive Programming',
    created_at: '2022-06-18T00:09:48.744Z',
    updated_at: '2022-06-18T00:09:48.745Z',
  },
  leader: {
    name: 'Aang',
    academic_year: '2019',
    email: 'aang@gmail.com',
    image:
      'https://cdn.discordapp.com/attachments/753143980681592867/960995097770594364/unknown.png',
    id: 'cl4hbpipd0026e8fyv8wx2d5u',
    major: 'Informatics',
  },
  TeamMember: [
    {
      status: 2,
      user: {
        id: 'cl4hbpipd0026e8fyv8wx2d5u',
        name: 'Aang',
        image:
          'https://cdn.discordapp.com/attachments/753143980681592867/960995097770594364/unknown.png',
      },
    },
    {
      status: 2,
      user: {
        id: 'cl2anv7oj0000fwfy52i3t7ts1',
        name: 'Muhammad aIlham Mubarak',
        image:
          'https://cdn.discordapp.com/attachments/753143980681592867/987550776689819659/139524210_195248452330187_6146448312036373360_n_2.jpg',
      },
    },
  ],
};
