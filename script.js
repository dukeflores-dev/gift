const title = document.getElementById('title');
const message = document.getElementById('message');
const changeTextBtn = document.getElementById('changeTextBtn');
const burstBtn = document.getElementById('burstBtn');
const heartWrap = document.querySelector('.heart-wrap');

const messages = [
  {
    title: '"For God so loved the world..."',
    text: '“For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.” — John 3:16'
  },
  {
    title: '"I can do all things..."',
    text: '“I can do all things through Christ who strengthens me.” — Philippians 4:13'
  },
  {
    title: '"Trust in the Lord..."',
    text: '“Trust in the Lord with all your heart and lean not on your own understanding.” — Proverbs 3:5'
  },
  {
    title: '"The Lord is my shepherd..."',
    text: '“The Lord is my shepherd; I shall not want.” — Psalm 23:1'
  },
  {
    title: '"Be strong and courageous..."',
    text: '“Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.” — Joshua 1:9'
  },
  {
    title: '"God is our refuge..."',
    text: '“God is our refuge and strength, an ever-present help in trouble.” — Psalm 46:1'
  },
  {
    title: '"With God all things are possible..."',
    text: '“With God all things are possible.” — Matthew 19:26'
  },
  {
    title: '"Cast all your anxiety..."',
    text: '“Cast all your anxiety on Him because He cares for you.” — 1 Peter 5:7'
  },
  {
    title: '"The joy of the Lord..."',
    text: '“The joy of the Lord is your strength.” — Nehemiah 8:10'
  },
  {
    title: '"Let all that you do be done in love..."',
    text: '“Let all that you do be done in love.” — 1 Corinthians 16:14'
  }
];

let index = 0;

function updateMessage() {
  index = (index + 1) % messages.length;
  title.textContent = messages[index].title;
  message.textContent = messages[index].text;
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
