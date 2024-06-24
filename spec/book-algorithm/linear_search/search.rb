def linear_search(array, value)
  array.each do |element|
    # 원하는 값을 찾으면 반환한다.
    if element === value
      return true

    # 찾고 있던 값보다 큰 원소에 도달하면 루프를 일찍 종료한다.
    elsif element > value
      break
    end
  end
  # 배열에서 값을 찾지 못하면 nil을 반환한다.
  nil
end

def binary_search(array, value)
  # 먼저 찾으려는 값이 있을 수 있는 상한선과 하한선을 정한다.
  # 최초의 상한선은 배열의 첫 번째 인덱스이고, 하한선은 배열의 마지막 인덱스이다
  low_bound = 0 # 0
  upper_bound = array.length - 1 # 6
  # 상한선과 하한선 사이의 가운데 값을 계속해서 확인하는 루프를 시작한다.
  while low_bound <= upper_bound
    # 가운데 값을 찾는다.
    midpoint = (upper_bound + low_bound) / 2
    puts "midpoint: #{midpoint}"
    # 중간 지점 값을 확인한다.
    value_at_midpoint = array[midpoint]
    # 중간 지점의 값이 찾고 있던 값이면 검색을 끝낸다.
    # 그렇지 않으면 더 클지 작을지 추측한 바에 따라 상한선이나 하한선을 바꾼다.
    if value > value_at_midpoint
      low_bound = midpoint + 1
    elsif value < value_at_midpoint
      upper_bound = midpoint - 1
    else
      return midpoint
    end
  end
end
