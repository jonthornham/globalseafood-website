<script>
  import Blob from "./Blob.svelte";

  export let title = "Lorem ipsum something";
  export let description = "";
  export let imageUrl = "";
  export let imageSide = "left";
  // export let linkUrl = "/";
</script>

{#if imageSide === "left"}
  <div class="mt-12 lg:mt-18 overflow-hidden">
    <div
      class="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
    >
      <div
        class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
      >
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gse-pacificBlueMessage"
            >
              <!-- Heroicon name: outline/sparkles -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              {description}
            </p>
            <!-- <div class="mt-6">
              <a
                href={linkUrl}
                class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gse-pacificBlueMessage hover:bg-indigo-700"
              >
                Get started
              </a>
            </div> -->
          </div>
        </div>
      </div>

      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div
          class="px-4 -ml-0 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
        >
          <!-- <Blob /> -->
          <img
            class="w-auto  rounded-xl shadow-xl rounded-3 ring-1 ring-black ring-opacity-5 lg:absolute lg:right-40 lg:h-full lg:w-auto lg:max-w-none"
            src={imageUrl}
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="mt-12 lg:mt-18 overflow-hidden">
    <div
      class="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-16"
    >
      <div
        class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1"
      >
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gse-pacificBlueMessage"
            >
              <!-- Heroicon name: outline/sparkles -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              {description}
            </p>
            <!-- <div class="mt-6">
              <a
                href={linkUrl}
                class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gse-pacificBlueMessage hover:bg-indigo-700"
              >
                Get started
              </a>
            </div> -->
          </div>
        </div>
      </div>

      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-2">
        <div
          class="px-4 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
        >
          <!-- <Blob /> -->
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-40 lg:h-full lg:w-auto lg:max-w-none"
            src={imageUrl}
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
{/if}
