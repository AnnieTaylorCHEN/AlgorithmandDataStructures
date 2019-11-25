
# you are given "from" as an array of 0-50 digits
# you are given "to" as an array of 0-50 digits
# the from[i] and to[i] are possible connecting dots. 
# you must find the shortest path, then count the steps to reach that, return steps. Otherwise, return -1. 
# execution time must be 10s or less. 
# Example: from: [0, 0, 1], to: [1, 2, 3], location A =2, location B = 3, to reach from location A to B, we need to pass 2 -> 0 -> 1 -> 3, so we return 3. 
# Example from [0, 1],  to:[2, 3], location A =0, location B = 1, impossible route, so return -1.
# now begin:

# Note: from and to are interchangeable, ie, we can go backwards.



#routes = []
fastest = 9999

def fastest_route(fr, to, locationA, locationB):
	global fastest
	recurse_routes(fr, to, locationA, locationB, [locationA], 0)
	if fastest < 9999:
		return fastest
	return -1


def recurse_routes(fr, to, location, target, visited, steps):
	#print(f'entering recurse_routes({fr}, {to}, {location}, {target}, {visited}, {steps})')
	#global routes
	global fastest
	
	if steps >= fastest:
		return
	if location == target:
		print('Found target ' + str(target) + ' in ' + str(steps) + ' steps! Routes: ' + str(visited))
		#routes.append(str(steps) + ':' + str(visited))
		fastest = steps
		return
	options = route_options(fr, to, location)
	#print(options)
	for node in options:
		#print(node, visited)
		if node not in visited:
			visited2 = visited.copy()
			visited2.append(node)
			recurse_routes(fr, to, node, target, visited2, steps + 1)


def route_options(fr, to, location):
	result = []
	i = 0
	while (i < len(fr)):
		if fr[i] == location:
			result.append(to[i])
		if to[i] == location:
			result.append(fr[i])
		i = i + 1
	return result


print("\nTests:\n")


def init_test():
	global routes
	global fastest
	routes = []
	fastest = 9999


def run_test(fr, to, locationA, locationB, expected):
	print()
	init_test()
	actual = fastest_route(fr, to, locationA, locationB)
	result = 'FAIL'
	if actual == expected:
		result = 'PASS'
	print("Test: " + result + '!  Expected: ' + str(expected) + ' Actual: ' + str(actual) + ' Routes: ' + str(routes))


run_test([0,0,1], [1,2,3], 2, 3, 3)

run_test([0,1], [2,3], 0, 1, -1)

a = [0,0,1,1,4,4,5,2,3,2, 8,5, 7, 9, 9,10]
b = [1,2,2,4,5,8,8,3,8,9,10,7,20,11,10,20]

# Expected 4 : 0 -> 2 -> 9 -> 10 -> 20
run_test(a, b, 0, 20, 4)

print('\nAll routes found:')
print(routes)
print('\nFastest: ' + str(fastest))

print()

