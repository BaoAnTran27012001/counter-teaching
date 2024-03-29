import React from 'react';

const Counter = () => {
  return (
    <>
      <nav>
        <span class='logo'>Counter APP</span>
      </nav>
      <main>
        <div class='card'>
          <div class='count-ctn'>
            <span class='count-num'>3</span>
          </div>
          <div class='btns-ctn'>
            <div class='change-count-ctn'>
              <div class='btn increase-btn-ctn'>
                <svg
                  class='increase-svg'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path
                    d='M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z'
                    fill='#F7FAFB'
                  />
                </svg>
              </div>
              <div class='btn decrease-btn-ctn'>
                <svg
                  class='decrease-svg'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    d='M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z'
                    fill='#F7FAFB'
                  />
                </svg>
              </div>
            </div>
            <div class='btn reset-btn-ctn'>
              <button class='reset-btn'>Reset</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Counter;
