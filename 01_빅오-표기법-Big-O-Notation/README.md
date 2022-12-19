## 빅오 (Big O) 소개

> Big 😲...!<br />

<br />

### 🚨 WARNING 🚨

> This section contains some math. Don't worry, we'll survive.

수학이 많이 등장하고, 로그(logarithm)도 등장하는데 겁먹지 말고 끝까지 인내하기...! (토닥토닥 🙂)<br />
이 섹션에서는 다른 섹션에 나올 코드를 '어떻게 얘기할 것'인지 정리하는 '프레임워크'를 만들 것이다. (?)<br />

<br />

### Objectives

- Motivate the need for something like Big O Notation (빅오 표기법 필요성)
- Describe what Big O Notation is (빅오가 무엇인지 정확히 설명)
- Simplify Big O Expressions (빅오 표기법을 간단하게 표현하는 방법)
- Define "time complexity" and "space complexity" (시간 복잡성과 공간 복잡성의 정의)
- Evaluate the time complexity and space complexity of diffrent algorithms using Big O Notaion (빅오 표기법을 사용해서 여러 가지 알고리즘을 평가)
- Describe what a logarithm is (그런 후, 로그가 무엇인지)

### 😵... 😠💪🏻!

<br />

### 빅오 표기법의 필요성

개념이 정확히 뭘까?<br />
이 코스는 알고리즘을 다루는 코스다.<br />
다양한 문제들을 해결하고, 컴퓨터 공학과 데이터구조에 대한 것이다.<br />
하지만, 이 코스에서 나오는 주제마다 **_해결법이 수십 개가 있을 것이다._**
그중 어떤 것이 Best 인지를 어떻게 평가할 수 있을까?<br />

이것이 빅오의 핵심이다. 어떠한 시스템인 것이다.<br />
**_여러 가지 코드를 서로 비교하고 성능을 평가하는 방법_** 이다.<br />

예를 들어 '문자열을 받아 이것을 반전시켜 출력하는 코드'를 함수를 구현하라고 했을 때,<br />
그 방법은 얼마나 될까?<br />

[stack overflow](https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript)만 살펴봐도 문제를 접근하는 방식이 다른 10가지 솔루션이 넘게 존재한다는 것을 알 수 있다.<br />
그렇다면 이 가운데 Best는 무엇일까? 물론 떠오른 해결책이 가장 최고 같겠지만, 그걸 어떻게 측정할 수 있을까?<br />
바로 빅오 표기법이 이 척도(🔴🟠🟡💚🟢)가 되어준다. 마치 [리히터 규모](https://namu.wiki/w/%EB%A6%AC%ED%9E%88%ED%84%B0%20%EA%B7%9C%EB%AA%A8)처럼 말이다. (a little bad metaphor 😅)<br />

<br />

### Who Cares?

프로젝트에 따라 작동하기만 하면 될 때도 있지만,<br />
수천 개의 큰 데이터 셋을 다루는 대기업에서 한 알고리즘이 다른 알고리즘보다 실행하는데 한 시간이 더 빠르다면 그런 경우에는 실제로 가장 좋은 알고리즘이 존재하는 것일 것이다.<br />
그렇기 때문에 코드의 성능을 얘기할 때 정확한 전문용어를 사용하는 것이 중요하다.<br />
내가 만든 솔루션이 만족스럽더라도 다른 솔루션과 비교하고 성능이 어떤지 이해하는 것이 도움이 된다.<br />

> It's important to have a precise vocabulary to talk about how our code performs<br />

<br />

또, 여러 접근법의 장단점을 얘기할 때도 유용하다. 가장 좋은 해결책을 찾는 것이 그렇게 뻔하지 않다. 한 솔루션이 정말 좋고 또 하나는 엉망인 경우가 그렇게 많지는 않다.<br />
가끔 한 솔루션이 많은 데이터량을 다루는 것을 잘 할 수도 있고, 또 하나는 더 오래 걸려도 처리하는 시간에 변동이 많이 없을 수 있다. **_항상 장단점이 있어서,_** 꼭 하나가 무조건 최고는 아니다.<br />

> Useful for discussing trade-offs between different approaches<br />

<br />

그리고 코드를 디버그 할 때 코드를 느리게 만드는 것을 이해하는 것이 중요하다.<br />
꼭 에러만을 찾는 것이 아니라, 코드가 작동을 하지만 생각보다 더 오랜 시간이 걸리거나, 브라우저에서 함수를 실행하니 컴퓨터가 렉이 걸릴 때와 같은 경우 빅오를 이해하면 어디서 문제가 나타나는지 찾기 쉬울 수 있다. 한 마디로 **_비효율적인 코드를 찾는 데 도움이 된다._**<br />

> When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications<br />

<br />

마지막으로는 면접에 자주 나오는 내용이기 때문에 (😅) 아는 것이 중요하다.
"이 알고리즘의 빅오 표기법을 말해주세요."<br />
"여기 3가지 함수가 있는데, 빅오가 무엇인가요?"<br />
...<br />
물론 궁극적인 목표는 내가 쓰는 코드를 더 잘 이해하고 더 좋은 코드를 쓰기 위해서 도움이 되는 것. (물론 면접은 중요해...!)
<br />

> Less important: it comes up in interviews!<br />

<br />

### 🙏🏼

<p>그동안 코드를 작성하면서 에러를 찾아내는 관점의 디버깅은 더 말할 것도 없이 중요하고 코딩의 기본이라 생각했고, 실무적으로도 늘 해왔던 일이다.</p>
<p>그래서 새로운 언어를 익힐 때는 문법과 함께 디버그 방법을 익히며 학습했다.</p>
<p>빅오라는 용어는 건너 들어서 알고 있었던 정도였는데, stack overflow로 간단한 예를 들어준 것 같이 여러 가지 해결 방안이 있을 때나 코딩 테스트를 치를 때, 나는 '어떤 기준'으로 선택을 해야 하는지가 항상 어려웠다.</p>
<p>부끄럽게도 그렇게 복잡한 기능을 만드는 것이라 생각지 않아 성능의 차이는 미비할 것이라 여기고,
같이 일하시는 분들이 보기 편할 거라고 생각되는 코드나 답변 가장 상단의 코드를 사용해왔었다. -_-;</p>
<p>이제는 이번 빅오 표기법 학습을 통해 이와 같은 기준을 통해 중심을 잡고 보다 객관적이고 좋은 코드를 쓸 수 있기를 기대해 본다.</p>
