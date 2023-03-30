import React from 'react';
import './contents.css';

import {
  iconCommunity,
  iconEmail,
  iconMessages,
  iconPhone,
  flowingConversation,
  growTogether,
  yourUsers
} from './imports';

const Contents = () => {
  return (
    <div className='huddle__landing-contents section__margin'>
      <div className="huddle__landing-contents_number">
        <div className="huddle__landing-contents_number-communities">
          <img src={iconCommunity} alt="icon community" />
          <h2>1.4k+</h2>
          <p>Communities Formed</p>
        </div>
        <div className="huddle__landing-contents_number-messages">
          <img src={iconMessages} alt="icon community" />
          <h2>2.7m+</h2>
          <p>Messages Sent</p>
        </div>
      </div>

      <div class="huddle__landing-contents-background top1__background section__margin"></div>
      <div className='huddle__landing-contents-grow_together'>
        <div class="huddle__landing-contents-grow_together-grow">
          <h2>Grow Together</h2>
          <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
        </div>
        <div class="huddle__landing-contents-grow_together-image">
          <img src={growTogether} alt="grow together" />
        </div>
      </div>
      <div class="huddle__landing-contents-background bottom2__background"></div>

      <div className='huddle__landing-contents-flowing_conver section__margin'>
        <div class="huddle__landing-contents-flowing_conver-image">
          <img src={flowingConversation} alt="flowing conversations" />
        </div>
        <div class="huddle__landing-contents-flowing_conver-grow">
          <h2>Flowing Conversations</h2>
          <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for more natural flow.</p>
        </div>
      </div>

      <div class="huddle__landing-contents-background top2__background section__margin"></div>
      <div className='huddle__landing-contents-your_users'>
        <div class="huddle__landing-contents-your_users-grow">
          <h2>Your Users</h2>
          <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your uses can start chatting immediately.</p>
        </div>
        <div class="huddle__landing-contents-your_users-image">
          <img src={yourUsers} alt="grow together" />
        </div>
      </div>
      <div class="huddle__landing-contents-background bottom2__background"></div>

      <div class="huddle__landing-contents-ready_build section__margin">
        <div class="huddle__landing-contents-ready_build-title">
          <h1>Ready To Build Your Community?</h1>
        </div>
        <div class="huddle__landing-contents-ready_build-button">
          <button>Get Started For Free</button>
        </div>
      </div>

    </div>
  )
}

export default Contents;