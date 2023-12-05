export interface IsBlogs {
    id: string,
    title: string,
    content: string
    date: string,
    img: string,
    view: string
}

export interface IsNote {
    id: string,
    title: string,
    content: string
    date: Date,
    img: string,
    view: string
}

export function UseTableData () {
    const blogs = <IsBlogs[]> [
        {
          id: '1',
          title:'Te nulla oportere reprimique his dolorum',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
          date: 'June 4, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?4',
          view:'2.4K'
        },
        {
          id: '2',
          title:'Te nulla oportere reprimique his dolorum 2',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
          date: 'June 2, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?1',
          view:'2.2K'
        },
        {
          id: '3',
          title:'Te nulla oportere reprimique his dolorum 3',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
          date: 'June 10, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?3',
          view:'1K'
        },
        {
          id: '4',
          title:'Te nulla oportere reprimique his dolorum 4',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
          date: 'Dec 10, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?2',
          view:'1.5K'
        }
    ]

    return{
        blogs
    }
}