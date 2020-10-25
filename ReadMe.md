# 04 Victor Moscone's JavaQuiz - HW4

## Remember Quiznos?

**A quick description**: Honnichiwa! Honorable quiz-master. Oh? You're viewing this quiz? Instead of running away, you're viewing this repo? I can't quiz the heck out of you without you viewing my page (https://victormoscone.github.io/victorm_hw4_quizapp/).

I've built a quiz for user's to challenge that, when started, will present a set of multiple-choice answers. If a user selects the correct answer, they are awared 1 point. If they choose the wrong one, they lose 10 seconds from the timer - constantly ticking away! 

Once the user finishes the quiz or runs out of time, it's over - and you're told your total score. You can even save your score by entering your initials!

This code still has a lot of room to grow. In some ways, the improvements would require significant overhauls.
1. I've saved the highscore info to the local machine, but I don't provide a way for the user to view or reset it.
2. Unfortunately, the only way to reset the quiz is to refresh the page. Major refactoring would need to be done to easily allow a button to reset things. Honestly, I had thought I was covering my tracks quite well.
3. Overall style leaves much to be desired. Aesthetics aren't my strong suite.
4. A lot of the programming I did could just generally be improved or smoothed out. The notifications when a user selects the right or wrong answer; they don't work well if you rapidly choose answers.

## Setup Instruction

```
1. Clone the repro to your desktop.
2. Launch index.html.

Alternatively:
1. Visit https://victormoscone.github.io/victorm_hw4_quizapp/
```

**Usage**

* Primary Usage: Quiz the user on their JavaScript knowledge.
* Seen below -

![quiz_mobile_1](https://user-images.githubusercontent.com/70674522/97099525-30136a80-1647-11eb-89c2-145244cdd633.PNG)
![quiz_web_1](https://user-images.githubusercontent.com/70674522/97099526-30ac0100-1647-11eb-8716-41454fad4502.PNG)
![quiz_web_2](https://user-images.githubusercontent.com/70674522/97099527-30ac0100-1647-11eb-9ab7-01312847fb44.PNG)

**Credits** 

* https://stackoverflow.com/questions/51573435/want-to-add-addeventlistener-on-multiple-elements-with-same-class
* https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript

- - -
© 2020 Victor Moscone. All Rights Reserved.