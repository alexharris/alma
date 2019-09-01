<template>
    <!-- .container is main centered wrapper -->
    <div class="container">

        <!-- columns should be the immediate child of a .row -->
        <div class="row">
            <div class="twelve columns">
                <slot></slot>
            </div>
        </div>


    </div>
</template>

<script>
export default {
  name: "PageContent",
  props: {
    msg: String
  }
};
</script>