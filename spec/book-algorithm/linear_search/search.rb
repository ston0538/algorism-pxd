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
  ## 배열에서 값을 찾지 못하면 nil을 반환한다.
  nil
end
