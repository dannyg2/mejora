<template>
  <div class="">
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">login</h3>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block" for="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                "
              />
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                "
              />
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="
                  px-6
                  py-2
                  mt-4
                  text-white
                  bg-blue-600
                  rounded-lg
                  hover:bg-blue-900
                "
              >
                Login
              </button>
              <a href="#" class="text-sm text-blue-600 hover:underline"
                >Forgot password?</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
