---
layout: docs
title: Close icon
description: Use a generic close icon for dismissing content like modals and alerts.
group: components
---

**Be sure to include text for screen readers**, as we've done with `aria-label`. Disabled close buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

{{< example >}}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

<button type="button" class="close" disabled aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{{< /example >}}
