"use client"


const Footer = () => {
  return (
  <footer class="py-8">
    <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h4 class="text-lg font-semibold">About Us</h4>
        <p class="text-sm mt-2 text-gray-600">We are a community of dog lovers in Sweden. Join us to share stories, find dog-friendly places, and more!</p>
      </div>
      <div>
        <h4 class="text-lg font-semibold">Quick Links</h4>
        <ul class="mt-2">
          <li><a href="#" class="text-sm text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" class="text-sm text-gray-600 hover:text-gray-800">News</a></li>
          <li><a href="#" class="text-sm text-gray-600 hover:text-gray-800">Map</a></li>
          <li><a href="#" class="text-sm text-gray-600 hover:text-gray-800">Quiz</a></li>
          <li><a href="#" class="text-sm text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-semibold">Follow Us</h4>
        <div class="mt-2 flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">Facebook<i class="fab fa-facebook"></i></a>
          <a href="#" class="text-gray-600 hover:text-gray-800">Instagram<i class="fab fa-instagram"></i></a>
          <a href="#" class="text-gray-600 hover:text-gray-800">Twitter<i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer