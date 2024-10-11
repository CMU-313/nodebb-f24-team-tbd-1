User Documentation

Create a new file UserGuide.md in the root directory of your repository
In this file, provide a detailed outline of how to use and user test your new feature(s)
You should also provide a link/description of where your added automated tests can be found, along with a description of what is being tested and why you believe the tests are sufficient for covering the changes that you have made

## Andrew Youn - Claim Button User Guide

### Overview
The **Claim Button** is a feature that allows TA users to claim reply rights to a student or user's post. It is done to prevent so called "sniping", when multiple TAs answer the same question. Once a topic is claimed, the user’s name will be displayed as the claimer.

### Where to Find the Claim Button
The Claim Button is located in the topic toolbar, typically at the top of each discussion thread. The button is available only for logged-in users and is visible on topics that have not already been claimed. Ideally we would want this button to only be shown to TA privileged users.

### How to Use the Claim Button
1. **Log In**: You must be logged in to claim a topic.
2. **Navigate to the Topic**: Open the topic you want to claim.
3. **Click the Claim Button**: Click the button labeled "Claim Topic," represented by a hand icon. This button will only appear if the topic is unclaimed.
4. **Confirmation**: Once clicked, the topic will be marked as claimed, and your username will appear next to the claim indicator.

### Behavior After Claiming
- Once claimed, the button will be replaced with a message that reads, **"Claimed by [Username]"** to inform other TAs that the topic is claimed.

### Automated Tests
The automated tests can be located at the very bottom of tests/topics.js

## Lexi Kronowitz - Additional Information Form User Guide

### Overview
The **Additional Information Form** is a feature that allows a user to fill out a form with their additional information that will be sent to the admin/professor.

### Where to Find the Additional Information Page
The Additional Information Page can be found by navigating to the home page and clicking the "Additional Information" button on the left sidebar. The button is available only for logged-in users.

### How to Access the Additional Information Form
1. **Log In**: You must be logged in to submit a form.
2. **Navigate to the Home Page**: The button to access this form is in the left sidebar on the home page
3. **Click the Additional Information**: Click the button labeled "Additional Information" to access the form
4. **Confirmation**: Once the button is click, the new endpoint should open and the form will be visible


### Automated Tests
The automated tests can be located in tests/controller.js and tests/controller-admin.js

### Kevin Cao - Badge next to users with high reputation

### Overview
The **User Badge** is a feature that adds a badge next to the username when ever they have high reputation. There are two different tiers, namely silver and gold, where gold requires more reputation.

### Where to find User Badge
**Log In**: Login first before accessing
**Click on profile** Start with the homepage, then click on the top right corner where the profile picture is, this opens a dropdown menu which has statuses and moderator tools
**Click on button with username** The top button has your username on it. You can now see a badge next to the name.

You can also see it by going to homepage -> general discussion -> click on a post to see badge next to post author.

### Testing
Since this is a frontend feature, the way to test is mainly by going to node_modules/nodebb-theme-harmony/templates/partials/account/header.tpl and modifying the reputation variable to get different badge or no badge.


## Erke Xia - Sort posts by popularity

### Overview
The feature allows a user to sort existing posts by popularity, which is determined by a combination of the number of votes a post receives and the time of creation.

### How to Sort Posts by Popularity
1. **Navigate to the Announcements page** (also supported on General Discussion, Comment and Feedback, and Blogs pages).
2. **Click Recently Replied**: This is the default sorting method dropdown.
3. **Choose popularity**: From the dropdown list, choose the option labeled "popularity" to sort posts accordingly.

### Automated Tests
The automated tests can be located in tests/controller.js


