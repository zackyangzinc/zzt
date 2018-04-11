require 'csv'

class Shipments
  def initialize
    @missing_shipments = {}
    @expected_shipments = {}
    @incoming_shipments = {}
  end

  def set_shipments(file_path, obj_type)
    CSV.foreach(file_path).each_with_index do |row, idx|
      next if idx == 0
      shipment_num = row.first
      shipment_obj = row.last
      obj_type[shipment_num] ||= []
      obj_type[shipment_num].push(shipment_obj)
    end
  end

  def calculate_missing_shipments
    set_shipments("expected.csv", expected_shipments)
    set_shipments("incoming.csv", incoming_shipments)
    expected_shipments.each do |key, value|
      incoming_array = incoming_shipments[key] || []
      missing_shipments[key] = expected_shipments[key] - incoming_array
    end
  end

  attr_reader :missing_shipments, :expected_shipments, :incoming_shipments
end

shipment_calculator = Shipments.new
shipment_calculator.calculate_missing_shipments
p shipment_calculator.missing_shipments
