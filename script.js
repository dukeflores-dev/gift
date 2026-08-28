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
      text: '“Behold, I am doing a new thing; now it springs forth, do you not perceive it?” — Isaiah 43:19'
    }
  ];

  let index = 0;

  function updateMessage() {
    index = (index + 1) % messages.length;
    titleEl.textContent = messages[index].title;
    messageEl.textContent = messages[index].text;
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
