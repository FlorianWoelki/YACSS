<template>
  <footer>
    <h6>YACSS</h6>
    <div class="container">
      <div class="row mt-1">
        <div v-for="index in sortedListItems.length / 4" :key="index" class="col-3">
          <ul>
            <li
              v-for="listItemIndex in sortedListItems.slice((index - 1) * 4, index * 4)"
              :key="listItemIndex + index"
              class="list-item"
            >
              <a href="#">
                {{ listItemIndex }}
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
        'Alert', 'Avatar', 'Badge', 'Button', 'Card', 'Code',
        'Footer', 'Hero', 'Modal', 'Navigation', 'Pagination',
        'Table', 'Tabs', 'Tags', 'Tooltip', 'Utility',
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
