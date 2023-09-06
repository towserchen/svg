<template>
<body class="bg-white h-screen flex justify-center items-center"> <!-- Changed to white background -->

    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900">Reset your password</h5>
            <div>
                <label for="newpassword" class="block mb-2 text-sm font-medium text-gray-900">New password: </label>
                <input type="newpassword" name="newpassword" id="newpassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter password..." required>
            </div>
            <div>
                <label for="reenternewpassword" class="block mb-2 text-sm font-medium text-gray-900">Re-enter new password: </label>
                <input type="reenternewpassword" name="reenternewpassword" id="reenternewpassword" placeholder="Reenter password..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
        </form>
    </div>

</body>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
