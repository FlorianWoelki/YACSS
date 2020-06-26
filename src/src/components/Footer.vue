<template>
  <footer>
    <h6>YACSS</h6>
    <div class="container">
      <div class="row mt-1">
        <div v-for="index in sortedListItems.length / 4" :key="index" class="col-3">
          <ul>
            <li
              v-for="listItem in sortedListItems.slice((index - 1) * 4, index * 4)"
              :key="listItem + index"
              class="list-item"
            >
              <a :href="`/#/guides/${listItem.toLowerCase()}`">
                {{ listItem }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        'Alerts', 'Avatars', 'Badges', 'Buttons', 'Cards', 'Code',
        'Footers', 'Hero', 'Modals', 'Navigation', 'Pagination',
        'Table', 'Tabs', 'Tags', 'Tooltips', 'Utility',
      ],
    };
  },
  computed: {
    sortedListItems() {
      const clonedItems = this.listItems;
      return clonedItems.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    },
  },
};
</script>
