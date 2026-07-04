# Aldila Profile

## Overview

I'm planning to create a new personal portfolio page for myself.

Here's what I thought:
- Desktop first, but mobile compatible
- I like black and purple color for the page's aura
- The taste of the page should be: astronomic, futuristic, worldwide
- The display is informational but can be absorbed quickly
- Target viewer is a company owner or company manager who look for a new senior software engineer. They often have small time window to view the page, so I wish my portfolio to be able to be scanned quickly
- 

The local codebase directory:
- This is a blank React project
- Everything about my professional work is in `docs/contexts/*` (including it's subdirectories) stored in markdown format.
- Plan first before committing to editing the React project

---

## The Layout

0. **Layout**

The Initial Dimensions resolution is 1920x1080. You can adjust to both scale up and scale down versions.

- Screen Wide Content:
  - Showing the content full width from left side of the screen to right side of the screen
- Contained Content:
  - Maximum width is `1280px`
  - The element is centerly aligned with `auto` margin left and right
  - Can be placed inside `Screen Wide` section

1. **Top Navigation Bar**

The top navigation bar is a sticky transparent bar and the background become a solid after scrolled.

  - The bar is Screen Wide
  - The content is Contained with two columns
  - Left side showing a simple logo of "AR" and a normal text "Aldila\nRochidias"
  - When the logo is hovered, it will show an animated wind aura of our primary color. This animation interacts with mouse's movement.
  - Right side showing navigation menu of: "About" (the home page), "Projects", "GitHub", and Dark Mode
  - The navigation menu have active and inactive indicator by using a simple opacity range
  - Mobile Version:
    - Under mobile view, the right side will display Dark Mode toggle button and menu button
    - When menu button clicked, the mobile version menu drawer will appear from right side
    - The drawer is full height with max-width of `280px` and using `column` flex direction
    - Top navbar is showing "AR" logo on the left and `X` close button on the right
    - The content is showing rows of our menus: "About" and "Projects" only
    - Last, we display a row with `auto` margin-top. This row is a `row` flex direction and uses `justify-content: flex-end` showing a GitHub icon (to my github link)

2. **Content**

Displaying the page content

3. **Footer**

A Screen Wide with Contained conten showing 2 rows

  - First Row:
    - Containing two columns
    - Left column is displaying "AR" logo
    - Right column is containing two rows of:
      - First row: Small text of "Aldila Rochidias | {{dynamic_switching_roles}}" (the role is swapping with animation every 2 seconds. e.g. swapping between "Frontend Engineer", "AI Engineer", "Automation Engineer", and more)
      - Second row: displaying a flexbox with `row` direction
        - The items are link icon of: "GitHub" and "LinkedIn"
  - Second Row:
    - Center aligned text of "&copy; {{year}} Aldila Rochidias. All rights reserved."

## The Pages

Here are the initial pages I wanted to create

### 1. About

The homepage displaying my core portfolio information.

### 2. Projects

Listing our projects including their techstack and screenshots. Some project may not have screenshot.

Projects with screenshot, for now we will use placeholder image (I'll attach the image manually later):
- Berkarir
- Morita
- Aktekstil
- Magnetix
- OKDoct
- Befree Tour
