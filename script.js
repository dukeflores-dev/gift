document.addEventListener('DOMContentLoaded', () => {
  const titleEl = document.getElementById('title');
  const messageEl = document.getElementById('message');
  const changeTextBtn = document.getElementById('changeTextBtn');
  const burstBtn = document.getElementById('burstBtn');
  const heartWrap = document.querySelector('.heart-wrap');

  const messages = [
    {
      title: '"Proverbs 3:6"',
      text: '“God is guiding your next step.” — Proverbs 3:6'
    },
    {
      title: '"Philippians 4:13"',
      text: '“I can do all things through Christ who strengthens me.” — Philippians 4:13'
    },
    {
      title: '"Proverbs 3:5"',
      text: '“Trust in the Lord with all your heart and lean not on your own understanding.” — Proverbs 3:5'
    },
    {
      title: '"Psalm 23:1"',
      text: '“The Lord is my shepherd; I shall not want.” — Psalm 23:1'
    },
    {
      title: '"Joshua 1:9"',
      text: '“Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.” — Joshua 1:9'
    },
    {
      title: '"Psalm 46:1"',
      text: '“God is our refuge and strength, an ever-present help in trouble.” — Psalm 46:1'
    },
    {
      title: '"Matthew 19:26"',
      text: '“With God all things are possible.” — Matthew 19:26'
    },
    {
      title: '"1 Peter 5:7"',
      text: '“Cast all your anxiety on Him because He cares for you.” — 1 Peter 5:7'
    },
    {
      title: '"Nehemiah 8:10"',
      text: '“The joy of the Lord is your strength.” — Nehemiah 8:10'
    },
    {
      title: '"1 Corinthians 16:14"',
      text: '“Let all that you do be done in love.” — 1 Corinthians 16:14'
    },
    {
      title: '"Mark 11:24"',
      text: '“Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.” — Mark 11:24'
    },
    {
      title: '"Isaiah 43:19"',
      text: '“Behold, I am doing a new thing; now it springs forth, do you not perceive it?” — Isaiah 43:19'    },
    {
      title: '"Psalm 27:13"',
      text: '"I remain confident of this: I will see the goodness of the Lord in the land of the living." — Psalm 27:13'
    },
    {
      title: '"Proverbs 31:25"',
      text: '"She is clothed with strength and dignity; she can laugh at the days to come." — Proverbs 31:25'
    },
    {
      title: '"Isaiah 40:31"',
      text: '"But those who hope in the Lord will renew their strength." — Isaiah 40:31'
    },
    {
      title: '"Deuteronomy 31:6"',
      text: '"Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you." — Deuteronomy 31:6'
    },
    {
      title: '"Jeremiah 29:11"',
      text: '"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." — Jeremiah 29:11'
    },
    {
      title: '"Psalm 71:14"',
      text: '"But as for me, I will always have hope; I will praise you more and more." — Psalm 71:14'
    },
    {
      title: '"Proverbs 22:19"',
      text: '"So that your trust may be in the Lord, I teach you today, even you." — Proverbs 22:19'
    },
    {
      title: '"2 Timothy 1:7"',
      text: '"For the Spirit God gave us does not make us timid, but gives us power, love and a sound mind." — 2 Timothy 1:7'
    },
    {
      title: '"Psalm 121:1-2"',
      text: '"I lift up my eyes to the hills. Where does my help come from? My help comes from the Lord, the Maker of heaven and earth." — Psalm 121:1-2'    }
  ];

  let index = 0;

  function updateMessage() {
    titleEl.classList.add('fade-out');
    messageEl.classList.add('fade-out');

    setTimeout(() => {
      index = (index + 1) % messages.length;
      titleEl.textContent = messages[index].title;
      messageEl.textContent = messages[index].text;

      titleEl.classList.remove('fade-out');
      messageEl.classList.remove('fade-out');
    }, 300);
  }

  changeTextBtn.addEventListener('click', updateMessage);

  burstBtn.addEventListener('click', () => {
    heartWrap.classList.remove('burst');
    void heartWrap.offsetWidth;
    heartWrap.classList.add('burst');

    setTimeout(() => {
      heartWrap.classList.remove('burst');
    }, 900);
  });
});
